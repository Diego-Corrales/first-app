

export const Home = () => {
    return (
        <main className="container w-full max-h-screen">
            <div className="text-center">
                <h2 className="text-3xl p-4">Bienvenidos a nuestra disqueria</h2>
                <p className="text-2xl p-4">En nuestra pagina encontraran la coleccion de discos mas variada y especial, asi como tambien el mejor Merchandising "oficial" de tus bandas favoritas</p>
            </div>
            <section className="flex flex-wrap">
                <div className="w-full md:w-2/3 p-6">
                    <h4>Carousel</h4>
                </div>
                <div className="w-full md:w-1/3 p-6">
                    <h4>Eslogan</h4>
                </div>
            </section>
            <div className="text-center">
                <h3 className="p-6">NOTICIAS Y SHOWS</h3>

            </div>

        </main>
    )
}