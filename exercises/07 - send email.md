## Requirements

You are building a tool to send emails to a large list of recipients. To avoid overwhelming the email server, you need to limit the number of emails that are sent concurrently.

Write a function that takes in a list of recipients and an email message and sends an email to each recipient.

Use p-queue to limit the number of emails that are sent concurrently. The p-queue should be used to queue up the email sending tasks and have a concurrency limit of 5.

You should use an async function for the tasks and make use of a promise-based email library to send the emails.

## Example

```javascript
const recipients = [
  "user1@example.com",
  "user2@example.com",
  "user3@example.com",
];
const message = "This is an email message";
await sendEmails(recipients, message);
```

## Hint

- [sindresorhus/p-queue: Promise queue with concurrency control](https://github.com/sindresorhus/p-queue)
