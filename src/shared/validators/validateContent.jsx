export const validateContent = (content) => {
    const regex = /^.{10,500}$/; 

    return regex.test(content)
}

export const validateContentMessage = 'El contenido de tu comentario debe contener entre 10 y 100 caracteres sin espacios'