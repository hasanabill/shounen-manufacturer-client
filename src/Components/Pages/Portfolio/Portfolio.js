import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <div className='mx-28 my-16'>
                <div className='my-16'>
                    <h3 className="text-5xl font-bold  text-center my-3 text-primary">A few words about me</h3>
                    <h2 className='text-3xl text-center font-bold'>I'm <b>Jahid Hassan</b>, a multidisciplinary developer and designer who focuses on telling my clients' stories visually, through enjoyable and meaningful experiences. I specialize in responsive react js SPA and unique user interfaces.</h2>
                </div>
                <div className='my-16'>
                    <p className='text-center text-xl text-primary'>Current education</p>
                    <h2 className="text-center text-2xl font-bold">I am currently studying at Daffodil International University. I am pursuing my graduation in Computer and Information System as a Bachelor Degree</h2>
                </div>
                <p className='text-center text-3xl my-10 text-primary'>My skills as a web developer</p>
                <div className="flex justify-center">
                    <table className="table w-1/2">
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

                <h1 className='text-4xl font-bold mt-20 text-center text-primary'>Some of my work</h1>
                <div>
                    <div className='flex flex-row justify-center gap-10 justify-items-center mt-10'>

                        {/* greensports */}
                        {/* https://green-sports-18e07.web.app/ */}
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-3xl font-bold">Isekai Inventory</h2>
                                <p className='font-bold'>Inventory management system</p>
                                <div className="card-actions justify-end">
                                    <a href="https://isekai-inventory.web.app/" target={"_blank"}><button className="btn btn-primary">Live site</button></a>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-3xl font-bold">Binarry Photography</h2>
                                <p className='font-bold'>Explore amazing gallary of this photography team</p>
                                <div className="card-actions justify-end">
                                    <a href="https://binnary-photography.web.app/" target={"_blank"}><button className="btn btn-primary">Live site</button></a>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-3xl font-bold">Mac Studio Review</h2>
                                <p className='font-bold'>The most powerful small computer</p>
                                <div className="card-actions justify-end">
                                    <a href="https://mac-studio.netlify.app/" target={"_blank"}><button className="btn btn-primary">Live site</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-16'></div>
            </div>
        </div>
    );
};

export default Portfolio;