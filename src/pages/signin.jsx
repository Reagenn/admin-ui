import FormSignIn from "../component/Fragments/FormSignIn";
import Authlayout from "../component/Layouts/Authlayout";

const SignInPage = () => {
  return (
    <Authlayout type="sign in">
      <FormSignIn />
    </Authlayout>
  );
};

export default SignInPage;
