import * as React from "react";

export const EmailTemplateCondidates = ({ firstName, lastName,  Phone,Email }) => (
<div>
    
    <p><strong>My Name is : </strong>{firstName} {lastName}</p>
    
    <p >You&apos;ve received a message from condidate {firstName+' '+ lastName} interested in your services in website explorem:</p>
      <div>
        <p><strong>Name : </strong> {firstName} {lastName}</p>
        <p><strong>Email : </strong> {Email}</p>
        <p><strong>Phone Number : </strong> {Phone}</p>
        
        
      </div>
  </div>
);
