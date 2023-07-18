import React from 'react';

const Noticias = () => {
  const news = [
    {
      title: "Hoy se conmemora una semana desde el lanzamiento de Kachi-Pum",
      date: "12 de julio de 2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim, justo in cursus auctor, tortor lacus tempor purus, id pulvinar sapien enim vitae risus.",
      image: "https://assets.objkt.media/file/assets-003/QmPfSwFWJ9Zq6MRtuMKd4NEjbbghWquJSVpPKZiHKzb9no/artifact",
    },
    {
      title: "Reglas de Kachi-Pum'",
      date: "9 de julio de 2023",
      content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce id quam at quam laoreet consequat.",
      image: "https://assets.objkt.media/file/assets-003/QmX46CWrqYbPnceFoVSMaBXqtjP5DcYhun6eXeU4xWwM74/artifact",
    },
    {
      title: "Devlog 1: Estado del juego",
      date: "14 de julio de 2023",
      content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce id quam at quam laoreet consequat.",
      image: "https://assets.objkt.media/file/assets-003/QmdZPaVEgQU2VszdqJL965iefmL5K16SLTBMxFBDpHGvgB/artifact",
    },
    {
      title: "Conoce a los creadores",
      date: "14 de julio de 2023",
      content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce id quam at quam laoreet consequat.",
      image: "https://images-cdn.exchange.art/CiCuOXi2uDTi6Xwgr-UsgxiNqM5agKm7jMRlRzQqUyo?ext=fastly&quality=20&width=300&blur=80&format=pjpg&auto=webp",
    },
    {
      title: "Notas del parche",
      date: "14 de julio de 2023",
      content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce id quam at quam laoreet consequat.",
      image: "https://assets.objkt.media/file/assets-003/QmRaNpY69RwKD1buGBkUYCKyWjTk7xbUEr4aEuwnGjAD3n/artifact",
    },
    {
      title: "Otros",
      date: "14 de julio de 2023",
      content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce id quam at quam laoreet consequat.",
      image: "https://images-cdn.exchange.art/CiCuOXi2uDTi6Xwgr-UsgxiNqM5agKm7jMRlRzQqUyo?ext=fastly&quality=20&width=300&blur=80&format=pjpg&auto=webp",
    },
  ];

  return (
    
    <section className=" py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-8xl text-white font-rubik mb-24 text-center py-6">Noticias Kachi-Pum</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={index} className="border-2 border-verde bg-blue-600 hover:bg-rosado shadow-md rounded-lg overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
              <div className="hover:cursor-pointer p-6">
                <h3 className="text-xl text-white hover:underline font-semibold mb-2">{item.title}</h3>
                <p className="text-white font-bold text-sm mb-4">{item.date}</p>
                <p className="text-white font-bold">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Noticias;
