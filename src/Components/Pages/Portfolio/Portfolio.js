import React from 'react';

const Portfolio = () => {
    return (
        <div className='mx-28 my-16'>
            <div className='my-16'>
                <h3 className="text-xl text-center my-3 text-primary">A few words about me</h3>
                <h2 className='text-3xl text-center font-bold'>I'm Mahmudul Hasan Anabil, a multidisciplinary developer and designer who focuses on telling my clients' stories visually, through enjoyable and meaningful experiences. I specialize in responsive react js SPA and unique user interfaces.</h2>
            </div>
            <div className='my-16'>
                <p className='text-center text-xl text-primary'>Current education</p>
                <h2 className="text-center text-2xl font-bold">I am currently studying at Daffodil International University. I am pursuing my graduation in Computer and Information System as a Bachelor Degree</h2>
            </div>
            <div className='my-16'>
                <p className='text-center text-xl my-10 text-primary'>My skills as a web developer</p>
                <div class="flex justify-center">
                    <table class="table w-1/2">
                        <thead>
                            <tr>
                                <th>FrontEnd</th>
                                <th>BackEnd</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>HTML</td>
                                <td>NODE JS</td>
                            </tr>
                            <tr>
                                <td>CSS</td>
                                <td>EXPRESS JS</td>
                            </tr>
                            <tr>
                                <td>JAVASCRIPT</td>
                                <td>MONGODB</td>
                            </tr>
                            <tr>
                                <td>REACT JS</td>
                                <td>AXIOS JS</td>
                            </tr>
                            <tr>
                                <td>REACT BOOTSTRAP</td>
                                <td>REACT QUERY</td>
                            </tr>
                            <tr>
                                <td>REACT TAILWIND</td>
                                <td>STRIPE JS</td>
                            </tr>
                            <tr>
                                <td>REACT RECHARTS</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;