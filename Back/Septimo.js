var consulta={
    "Consultas":
    {
      "Marzo":
      {
         "Total horas":240,
         "Tiempo promedio (min) por consulta":30,
         "Horas diarias":7,
      },
      "tipos":
      [
        {"Id":2,"tipoConsulta":"Pediatría","cantidadPersonas":20},
        {"Id":4,"tipoConsulta":"General","cantidadPersonas":35},
        {"Id":6,"tipoConsulta":"Dermatología","cantidadPersonas":19},
      ],
      "descripcion":
      [
        {"gravedadGeneral":"media"},
        {"gravedadGeneral":"media"},
        {"gravedadGeneral":"media"},
        {"gravedadGeneral":"media"},
      ]
    }
  }
  console.log("Resumen atencion de citas:",consulta)