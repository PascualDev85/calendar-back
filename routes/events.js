/*
    Rutas de Eventos /Events
    host + /api/events
*/

const { Router } = require("express");
const { check } = require("express-validator");

const { isDate } = require("../helpers/isDate");
const { validarCampos } = require("../middlewares/file-validator");
const { validarJWT } = require("../middlewares/validate-jwt");
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  borrarEvento,
} = require("../controllers/events");

const router = Router();

router.use(validarJWT);

router.get("/", getEventos);

router.post(
  "/",
  [
    check("title", "El título es obligatorio").not().isEmpty(),
    check("start", "La fecha de inicio es obligatoria").custom(isDate),
    // custom es un método de express-validator
    check("end", "La fecha de fin es obligatoria").custom(isDate),
    validarCampos,
  ],
  crearEvento
);

router.put("/:id", actualizarEvento);

router.delete("/:id", borrarEvento);

module.exports = router;
