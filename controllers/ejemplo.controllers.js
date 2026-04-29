import Ejemplo from "../models/ejemplo.models.js";

export const getallEjemplo = async (req, res) => {
    console.log("Obteniendo ejemplos");
    try {
        const ejemplos = await Ejemplo.find({}, { __v: 0 });
        if (ejemplos.length === 0) {
            return res.status(404).json({ msg: "No se encontraron ejemplos" });
        }
        res.json({ msg: "Ejemplos obtenidos correctamente", data: ejemplos });
    } catch (error) {
        console.error("Error al obtener ejemplos:", error);
        res.status(500).json({ msg: "Error interno del servidor" });
    }
};

export const getEjemploById = async (req, res) => {
    console.log("Obteniendo ejemplo por ID");
    try {
        const { id } = req.params;
        const ejemplo = await Ejemplo.findById(id, { __v: 0 });
        if (!ejemplo) {
            return res.status(404).json({ msg: "Ejemplo no encontrado" });
        }
        res.json({ msg: "Ejemplo obtenido correctamente", data: ejemplo });
    } catch (error) {
        console.error("Error al obtener ejemplo:", error);
        res.status(500).json({ msg: "Error interno del servidor" });
    }
};

export const createEjemplo = async (req, res) => {
    console.log("Creando ejemplo");
    try {
        const nuevoEjemplo = new Ejemplo(req.body);
        const ejemploGuardado = await nuevoEjemplo.save();
        res.status(201).json({ msg: "Ejemplo creado correctamente", data: ejemploGuardado });
    } catch (error) {
        console.error("Error al crear ejemplo:", error);
        res.status(500).json({ msg: "Error interno del servidor" });
    }
};

export const updateEjemplo = async (req, res) => {
    console.log("Actualizando ejemplo");
    try {
        const { id } = req.params;
        const ejemploActualizado = await Ejemplo.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!ejemploActualizado) {
            return res.status(404).json({ msg: "Ejemplo no encontrado" });
        }
        res.json({ msg: "Ejemplo actualizado correctamente", data: ejemploActualizado });
    } catch (error) {
        console.error("Error al actualizar ejemplo:", error);
        res.status(500).json({ msg: "Error interno del servidor" });
    }
};

export const deleteEjemplo = async (req, res) => {
    console.log("Eliminando ejemplo");
    try {
        const { id } = req.params;
        const ejemploEliminado = await Ejemplo.findByIdAndDelete(id);
        if (!ejemploEliminado) {
            return res.status(404).json({ msg: "Ejemplo no encontrado" });
        }
        res.json({ msg: "Ejemplo eliminado correctamente", data: ejemploEliminado });
    } catch (error) {
        console.error("Error al eliminar ejemplo:", error);
        res.status(500).json({ msg: "Error interno del servidor" });
    }
};
