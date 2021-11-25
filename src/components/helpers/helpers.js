const campoRequerido = (dato) => {
  if (dato.trim().length > 0) {
    return true;
  } else {
    return false;
  }
};

// // si un if tiene una soa linea de codigo puedo omitir las {}
const rangoPrecio = (dato) => {
  if (dato > 0 && dato <= 5000) return true;
  else return false;
};


export {campoRequerido , rangoPrecio}
