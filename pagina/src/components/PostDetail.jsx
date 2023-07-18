import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = ({ posts }) => {
    const { id } = useParams();
    const postId = parseInt(id);
    const post = posts.find(post => post.id === postId);

    if (!post) {
        // Manejo del caso cuando no se encuentra el post
        return <div>Post no encontrado</div>;
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-celeste rounded-lg shadow-md overflow-hidden p-8 mx-10" style={{ width: '65%' }}>
                <div className="bg-rosado rounded-lg text-white px-6 py-4 flex items-center mb-4">
                    <img src={post.avatar} alt={post.author} className="w-40 h-40 rounded-full mr-4" />
                    <div>
                        <h2 className="text-2xl font-semibold">{post.title}</h2>
                        <p className="text-sm text-white">Publicado por {post.author}</p>
                    </div>
                </div>
                <div>
                    <p className="text-white font-semibold">{post.content}</p>
                </div>
                {/* Aquí puedes agregar la lógica para mostrar los comentarios del post */}
                <div className="mt-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
                        Responder
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;