import React from "react";

const Faq = () => {
  return (
    <div className="grid md:grid-cols-2 gap-2 mt-6">
      <div className="card w-full md:w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What are the main challenges of machine learning?
          </h2>
          <p>
            Common issues in Machine Learning Inadequate Training Data. ... Poor
            quality of data. ... Non-representative training data. ...
            Overfitting and Underfitting. ... Monitoring and maintenance. ...
            Getting bad recommendations. ... Lack of skilled resources. ...
            Customer Segmentation.
          </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What is the limitations of machine learning?
          </h2>
          <p>
            What is the limitations of machine learning? Image result Poor
            transfer learning ability, reusability of modules, and integration.
            Systems are opaque, making them very hard to debug. Performance
            cannot be audited or guaranteed at the 'long tail' They encode
            correlation, not causation or ontological relationships.
          </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What is the future of machine learning?
          </h2>
          <p>
            Machine Learning is a subfield of Artificial Intelligence. From
            predicting the spread of the COVID-19 virus to supporting
            cutting-edge cancer research, AI & ML can disrupt and transform
            every single segment of society.
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

export default Faq;
