import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const { switchToSignadmin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Sign up</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Are you a student? 
        <BoldLink href="#" onClick={switchToSignin}>
          Go Back
        </BoldLink>
      </MutedLink>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Are you an Admin?
        <BoldLink href="#" onClick={switchToSignadmin}>
          Sign in
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}