import { useActionState } from "react";
import { useDispatch } from "react-redux";
import { isLink, isMail } from "../validation/validation";
import { updateResumeItem } from "../../../store/resumeActions";

const useSendFormData = (id, formName) => {
  const dispatch = useDispatch();
  const sendResume = (_, formData) => {
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
      dispatch(updateResumeItem(formName, id, data));
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
