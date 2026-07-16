import { Html, Head, Body, Text } from "react-email";

interface ContactEmail {
    name: string,
    email: string,
    message: string
}

export const ContactEmail = ({ name, email, message }: ContactEmail) => (
    <Html>
      <Head />
      <Body>
        <Text>You have a new message from:</Text>
        <Text>Name: {name}</Text>
        <Text>Email: {email}</Text>
        <Text>{message}</Text>
      </Body>
    </Html>
)