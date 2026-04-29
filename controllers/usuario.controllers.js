import Usuario from "../models/usuario.models.js";

export const getallUsuario = async (req, res) => {
    console.log("Obteniendo usuarios");
    try {
        const usuarios = await Usuario.find({}, { __v: 0 });
        if (usuarios.length === 0) {
            return res.status(404).json({ msg: "No se encontraron usuarios" });
        }
        res.json({ msg: "Usuarios obtenidos correctamente", data: usuarios });
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.status(500).json({ msg: "Error interno del servidor" });
    }
};

export const getUsuarioById = async (req, res) => {
    console.log("Obteniendo usuario por ID");
    try {
        const { id } = req.params;
        const usuario = await Usuario.findById(id, { __v: 0 });
        if (!usuario) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }
        res.json({ msg: "Usuario obtenido correctamente", data: usuario });
    } catch (error) {
        console.error("Error al obtener usuario:", error);
        res.status(500).json({ msg: "Error interno del servidor" });
    }
};

export const createUsuario = async (req, res) => {
    console.log("Creando usuario");
    try {
        const nuevoUsuario = new Usuario(req.body);
        const usuarioGuardado = await nuevoUsuario.save();
        res.status(201).json({ msg: "Usuario creado correctamente", data: usuarioGuardado });
    } catch (error) {
        console.error("Error al crear usuario:", error);
        res.status(500).json({ msg: "Error interno del servidor" });
    }
};

export const updateUsuario = async (req, res) => {
    console.log("Actualizando usuario");
    try {
        const { id } = req.params;
        const usuarioActualizado = await Usuario.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!usuarioActualizado) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }
        res.json({ msg: "Usuario actualizado correctamente", data: usuarioActualizado });
    } catch (error) {
        console.error("Error al actualizar usuario:", error);
        res.status(500).json({ msg: "Error interno del servidor" });
    }
};

export const deleteUsuario = async (req, res) => {
    console.log("Eliminando usuario");
    try {
        const { id } = req.params;
        const usuarioEliminado = await Usuario.findByIdAndDelete(id);
        if (!usuarioEliminado) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }
        res.json({ msg: "Usuario eliminado correctamente", data: usuarioEliminado });
    } catch (error) {
        console.error("Error al eliminar usuario:", error);
        res.status(500).json({ msg: "Error interno del servidor" });
    }
};