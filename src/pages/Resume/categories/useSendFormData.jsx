import { useActionState } from "react";
import { useDispatch } from "react-redux";
import { isLink, isMail } from "../validation/validation";

const useSendFormData = (id, formName) => {
  const dispatch = useDispatch();
  const sendResume = (prevState, formData) => {
    const data = Object.fromEntries(formData.entries());

    const Link = data?.Link;
    const Mail = data?.mail;
    const LinkDin = data?.Linkdin;

    let errors = [];

    if (Mail) {
      isMail(Mail, errors);
    }

    if (Link) {
      isLink(Link, errors);
    }

    if (LinkDin) {
      isLink(LinkDin, errors);
    }

    if (errors.length > 0) {
      return {
        errors,
        enteredValue: {
          ...data,
        },
      };
    } else {
      dispatch({
        type: "UPDATE",
        payload: { formId: formName, formNumber: id, data },
      });
    }

    return {
      error: null,
      enteredValue: {
        ...data,
      },
    };
  };

  const [formState, formAction] = useActionState(sendResume, { errors: null });

  return [formState, formAction];
};

export default useSendFormData;
