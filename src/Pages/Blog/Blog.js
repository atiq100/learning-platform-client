import React from "react";

const Blog = () => {
  return (
    <div className="grid md:grid-cols-2 gap-2 mt-6">
      <div className="card w-full md:w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">what is `cors`?</h2>
          <p>
            CORS is a mechanism which aims to allow requests made on behalf of
            you and at the same time block some requests made by rogue JS and is
            triggered whenever you are making an HTTP request to: a different
            domain (eg. site at example.com calls api.com) a different sub
            domain (eg. site at example.com calls api.example.com) a different
            port (eg. site at example.com calls example.com:3001) a different
            protocol (eg. site at https://example.com calls http://example.com)
            This mechanism prevents attackers that plant scripts on various
            websites (eg. in ads displayed via Google Ads) to make an AJAX call
            to www.yourbank.com and in case you were logged in making a
            transaction using *your* credentials.
          </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            Why are you using `firebase`? What other options do you have to
            implement authentication?
          </h2>
          <p>
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app. It
            supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, and
            more.
          </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">How does the private route work?</h2>
          <p>
            PrivateRoute component is the blueprint for all private routes in
            the application. If the user is logged in, go on and display the
            component in question; otherwise, redirect the user to sign-in page.
            Additionally, we can define the logic of isLogin utility function
            separately in utils folder.
          </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">What is Node? How does Node work?</h2>
          <p>
            What is this node? Image result for What is Node? How does Node
            work? Node. js is an open-source, cross-platform JavaScript runtime
            environment and library for running web applications outside the
            client's browser.Node allows developers to write JavaScript code
            that runs directly in a computer process itself instead of in a
            browser. Node can, therefore, be used to write server-side
            applications with access to the operating system, file system, and
            everything else required to build fully-functional applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
