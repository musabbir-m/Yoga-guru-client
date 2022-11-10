import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <div>
        <div>
          <div className="hero h-96 rounded-xl" style={{}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Welcome to my blog</h1>
                <p className="mb-5"></p>
                <Link to="/register">
                  <button className="btn btn-secondary">Get Started</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" shadow-sm rounded mx-3 mt-2 bg-emerald-200 px-5 py-3 mb-4">
          <h2 className="text-4xl mb-4">Difference between SQL and NoSQL</h2>
          <p className="text-xl">
            SQL databases are relational, NoSQL databases are non-relational.
            SQL databases use structured query language and have a predefined
            schema. NoSQL databases have dynamic schemas for unstructured data.
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. SQL databases are table-based, while NoSQL
            databases are document, key-value, graph, or wide-column stores. SQL
            databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </p>
        </div>
        <div className=" shadow-sm rounded mx-3 mb-4 pb-4 mt-2 bg-emerald-200">
          <h2 className="text-4xl">What is JWT, and how does it work?</h2>
          <p className="text-xl justify-start">
            JSON Web Token is an open industry standard used to share
            information between two entities, usually a client and a server .
            They contain JSON objects which have the information that needs to
            be shared. Each JWT is also signed using cryptography (hashing) to
            ensure that the JSON contents (also known as JWT claims) cannot be
            altered by the client or a malicious party.
            <br />
          </p>
          <h3 className="text-3xl mt-3">How does it work?</h3>
          <p>
            Basically the identity provider(IdP) generates a JWT certifying user
            identity and Resource server decodes and verifies the authenticity
            of the token using secret salt / public key.
          </p>
          <p>
            User sign-in using username and password or google/facebook.
            Authentication server verifies the credentials and issues a jwt
            signed using either a secret salt or a private key. User's Client
            uses the JWT to access protected resources by passing the JWT in
            HTTP Authorization header. Resource server then verifies the
            authenticity of the token using the secret salt/ public key.
          </p>
        </div>

        <div className="text-4xl shadow-sm rounded mx-3 mb-4 pb-4 mt-2 bg-emerald-200">
          <h2>What is the difference between javascript and NodeJS?</h2>
          <p className="text-xl">
            JavaScript is a client-side scripting language that is lightweight,
            cross-platform, and interpreted. Both Java and HTML include it.
            Node.js, on the other hand, is a V8-based server-side programming
            language. As a result, it is used to create network-centric
            applications. It's a networked system made for data-intensive
            real-time applications. If we compare node js vs. python, it is
            clear that node js will always be the preferred option.
          </p>
          <p className="text-xl">
            2. JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node.js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language. It requires libraries that can be
            conveniently accessed from JavaScript programming to be more
            helpful.
          </p>

          <p className="text-xl">
            3. Any engine may run JavaScript. As a result, writing JavaScript is
            incredibly easy, and any working environment is similar to a
            complete browser. Node.js, on the other hand, only enables the V8
            engine. Written JavaScript code, on the other hand, can run in any
            context, regardless of whether the V8 engine is supported. 4. A
            specific non-blocking operation is required to access any operating
            system. There are a few essential objects in JavaScript, but they
            are entirely OS-specific. Node.js, on the other hand, can now
            operate non-blocking software tasks out of any JavaScript
            programming. It contains no OS-specific constants. Node.js
            establishes a strong relationship with the system files, allowing
            companies to read and write to the hard drive.
          </p>
        </div>
        <div className=" shadow-sm rounded mx-3 mt-2 bg-emerald-200 py-5">
          <h2 className="text-4xl">What is Node JS</h2>
          <p className="text-xl">
            Node.js is a JavaScript runtime environment. The Node.js run-time
            environment includes everything you need to execute a program
            written in JavaScript. Node.js came into existence when the original
            developers of JavaScript extended it from something you could only
            run in the browser to something you could run on your machine as a
            standalone application. <br />
          </p>
          <h4 className="text-2xl my-2">
            How does NodeJS handle multiple requests at the same time?
          </h4>
          <p className="text-xl">
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. If NodeJS can process the request without I/O
            blocking then the event loop would itself process the request and
            sends the response back to the client by itself. But, it is possible
            to process multiple requests parallelly using the NodeJS cluster
            module or worker_threads module.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
