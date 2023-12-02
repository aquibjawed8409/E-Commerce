import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center m-auto items-center flex-col my-8">
      <h2 className="font-bold text-3xl mb-5">Contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56107.97122301211!2d76.98549542167969!3d28.487128799999983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1909f3c15555%3A0x748140ebd93346d5!2sKiyoshi!5e0!3m2!1sen!2sin!4v1701093429965!5m2!1sen!2sin"
        width="100%"
        height="400"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="my-10 bg-[rgb(230,230,250)] p-5 w-[20rem] h-auto ">
        <form action="" method="post"  className="flex flex-col gap-3">
          <input className="p-2 rounded" type="text" name="username" placeholder="Enter Your Name" required />
          <input className="p-2 rounded"  type="email" name="email" placeholder="Enter your Email" required />
          <textarea className="p-2 rounded" name="Message"  cols="10" rows="4" placeholder="Enter Your Message" required></textarea>
          <button type="submit" className='bg-[#3273dc] px-3 py-2 text-white w-fit m-auto'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
