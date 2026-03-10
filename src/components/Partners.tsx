

export const Partners = () => {
    const partners = [
        { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
        { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
        { name: 'Airbnb', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg' },
        { name: 'Spotify', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg' },
        { name: 'InTrax', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Intrax_logo.png' }, // Placeholder-like
        { name: 'Noxis', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' }, // Placeholder-like
    ];

    return (
        <section className="py-12 bg-white border-b border-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-8">
                    Proud Marketing <span className="text-primary">Partners</span> With
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                    {partners.map((partner) => (
                        <img
                            key={partner.name}
                            src={partner.logo}
                            alt={partner.name}
                            className="h-6 md:h-8 object-contain"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
