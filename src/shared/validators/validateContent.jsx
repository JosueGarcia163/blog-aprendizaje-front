export const validateContent = (content) => {
    const regex = /^.{10,250}$/; 

    return regex.test(content)
}

export const validateContentMessage = 'El contenido de tu comentario debe contener entre 10 y 250 caracteres sin espacios'