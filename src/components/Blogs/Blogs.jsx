

const Blogs = () => {
    return (
        <div className='flex justify-center items-center pt-10 pb-20 bg-gray-100'>
        <div className='w-3/4'>
            <h5 className='font-bold text-lg'>i. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h5>
            <p className='text-gray-600 my-3'>Access token contains all the information the server needs to know if the user / device can access the resource you are requesting or not. They are usually expired tokens with a short validity period. The refresh token is used to generate a new access token.<br/>
            Access tokens are used in token-based authentication to allow an application to access an API. The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API. A refresh token is a special token that is used to obtain additional access tokens. <br/>
            We typically have two options for client-side token storage: localStorage (aka localStorage) and cookies. </p>
            <h5 className='font-bold text-lg'>ii. Compare SQL and NoSQL databases?</h5>
            <p className='text-gray-600 my-3'>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON. NoSQL is easy-to-use, flexible and offers high performance.</p>
            <h5 className='font-bold text-lg'>iii. What is express js? What is Nest JS?</h5>
            <p className='text-gray-600 my-3'>Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI. The main difference between both frameworks is that NestJS is opinionated while ExpressJS is unopinionated.</p>
            <h5 className='font-bold text-lg'>iv. What is MongoDB aggregate and how does it work?</h5>
            <p className='text-gray-600 my-3'> Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline. Basically, this aggregation operation practices data records and provides calculated results. The aggregation operations assemble values from various documents together and are able to execute a range of operations, such as average, sum, maximum, minimum, etc., on the assembled data to provide only a result.</p>
        </div>
        </div>
    );
};

export default Blogs;