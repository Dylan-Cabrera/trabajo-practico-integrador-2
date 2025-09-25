Embebido y refenciado
Se eliguio el uso de embebido para el profile debido a que son datoos que no se consultarian por separado de la informacion del user, es mas conveniente ver toda la informacion junta.
Por otro lado los modelos refenciados si van a aser requeridos por separado.


-----------------------------------------------------------------------------------


Pasos para iniciar :

1. clonar el .env.example como .env y configurar las variables de entorno

2. Utilizar el comando "npm i" en la terminal para descargar las dependencias

3. Utilizar el comando "npm run dev" para levantar el servidor y la base de datos

-------------------------------------------------------------------------------------

Validaciones personalizadas

Se utiliza en los modelos pare verificar que el id mandado en los parametros corresponda a un registro existente, el de este ejemplo busca la existencia de un articulo. 

param("id").custom( async (value) => {
            const article = await ArticleModel.findById(value)
            if(!article) {
                throw new Error("Article no encontrado")
            }
        })



Para verificar que solo pasen los valores admitidos, en caso de que se añada un nuevo rol solo se actualiza el enum del modelo y se lo añade al arreglo. Tambien utilizado para el status de los articulos

 body("role").custom( async (value) => {
        const roles = ["user", "admin"];  
        if(!roles.includes(value)) {
            throw new Error("Role invalido")
        }
    })


Para verificar que no existan registros identicos en los casos que re requieran,  es este caso busca una etiqueta por el nombre mandado por el body, si ya existe un registro igual tira un error

.custom( async (value) => {
        const tag = await TagModel.findOne({name: value})
        if(tag) {
            throw new Error("Ya existe un tag con ese nombre")
        }
    })

Verifica que al momento de actualizar el email no ingrese el mismo con el que ya esta logeado

.custom( async (value, {req}) => {
        const user = await UserModel.findOne({email:  value, _id: {$eq: req.user.id}});
        if(user) {
            throw new Error("Ya estas registrado con ese email")
        }
    })


-----------------------------------------------------------

Rutas

Publicas:

Registro
http://localhost:3005/api/auth/register

Inicio de sesion
http://localhost:3005/api/auth/login

Cerrar Sesion
http://localhost:3005/api/auth/register

Privadas

Obtener usuarios /:id para uno en especifico, actualizar o borrar
http://localhost:3005/api/users

Obtener y actualizar el pefil del usuario logeado
http://localhost:3005/api/profile


Obtener todos los articulos o crear, con /:id para actualizar y borrar
http://localhost:3005/api/articles


Obtener todos los tags o crear, con /:id para actualizar y borrar
http://localhost:3005/api/tags

Obtener todos los comments o crear, con /:id para actualizar y borrar
http://localhost:3005/api/comments

Obtener los comentarios del usuario logeado
http://localhost:3005/api/comments/my






