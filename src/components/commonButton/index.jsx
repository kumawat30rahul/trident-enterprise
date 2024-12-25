import { Button } from "../ui/button";

const CommonButton = ({ title, variant = "primary" }) => {
  return <Button variant={variant}>{title}</Button>;
};

export default CommonButton;
