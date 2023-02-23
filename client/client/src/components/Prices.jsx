import React from 'react';

const Prices = () => {
    return(
    <section id="suscribete" className="bg-secondary text-light ">
        <div className="container">
            <div className="text-center h1 py-5">
                <i className="bi bi-credit-card"></i>
                <i className="bi bi-credit-card"></i>
                <i className="bi bi-credit-card"></i>
            </div>
            <h2 className="text-center mb-5 display-4">Suscripciones y donaciones</h2>
            <p className="Lead text-center pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, provident ut officia ullam labore consectetur porro, aspernatur, ducimus modi debitis reiciendis distinctio doloremque obcaecati eveniet dolores molestiae. Beatae, nemo at possimus pariatur itaque quae, est tempore dicta fugit ut rerum natus cupiditate! Nulla asperiores quo tempora sunt cum fugiat repellendus!</p>
        </div>
        <div className="row text-dark text-center">
            <div className="col-12 col-md-4 mb-5">
                <div className="card mx-5">
                    <div className="card-body">
                        <h2 className="my-5">Dona</h2>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Donante</li>
                        <li className="list-group-item">lista 2</li>
                        <li className="list-group-item">lista 3</li>
                        <li className="list-group-item">lista 4</li>
                        <li className="list-group-item">lista 5</li>
                    </ul>
                    <div className="card-body">
                        <button className="btn btn-outline-dark">
                            Suscríbete
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-4 mb-5">
            <div className="card mx-5">
                    <div className="card-body">
                        <h2 className="my-5">$10/mes</h2>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Gold</li>
                        <li className="list-group-item">lista 2</li>
                        <li className="list-group-item">lista 3</li>
                        <li className="list-group-item">lista 4</li>
                        <li className="list-group-item">lista 5</li>
                    </ul>
                    <div className="card-body">
                        <button className="btn btn-outline-dark">
                            Suscríbete
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-4 mb-5">
            <div className="card mx-5">
                    <div className="card-body">
                        <h2 className="my-5">$50/mes</h2>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Premium</li>
                        <li className="list-group-item">lista 2</li>
                        <li className="list-group-item">lista 3</li>
                        <li className="list-group-item">lista 4</li>
                        <li className="list-group-item">lista 5</li>
                    </ul>
                    <div className="card-body">
                        <button className="btn btn-outline-dark">
                            Suscríbete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Prices