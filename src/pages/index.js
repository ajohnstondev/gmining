import React from "react";
import Header from "./../components/header";

function IndexPage() {
  return (
    <div>
      <section className="testClass">
        <Header />
        <div className="container mx-auto px-4 mt-16">
          <h1 className='heading'>G MINING VENTURES.</h1>
          <h1 className='sub-heading font-thin'>BUY. BUILD. OPERATE.</h1>
        </div>
      </section>
    </div>
  );
}

export default IndexPage;
