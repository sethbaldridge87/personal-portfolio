import { Html, Head, Body, Text, Heading, Hr } from "react-email";

interface ContactEmail {
    name: string,
    email: string,
    message: string
}

export const ContactEmail = ({ name, email, message }: ContactEmail) => (
    <Html>
      <Head />
      <Body>
        <Heading as="h1">You have a new message from:</Heading>
        <Text><strong>Name:</strong> {name}</Text>
        <Text><strong>Email:</strong> {email}</Text>
        <Text style={textarea}>{message}</Text>
        <Hr />
      </Body>
    </Html>
)

const textarea: React.CSSProperties = {
  whiteSpace: 'pre-line'
}