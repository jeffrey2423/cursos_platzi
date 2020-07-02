using Microsoft.AspNetCore.Mvc;
using HolaMundoMVC.Models;
using System;
using System.Linq;
using CoreEscuela.Entidades;

namespace HolaMundoMVC.Controllers
{
    public class EscuelaController : Controller
    {
        private EscuelaContext _context;
        public IActionResult Index()
        {
            // var escuela = new Escuela();
            // escuela.AñoDeCreacion = 2020;
            // escuela.Nombre = "Escuela de Prueba";
            // escuela.UniqueId = Guid.NewGuid().ToString();
            // escuela.Ciudad = "Cali";
            // escuela.Pais = "Colombia"; 
            // escuela.TipoEscuela = TiposEscuela.Secundaria;
            // escuela.Dirección = "Cali-Colombia";

            ViewBag.CualquierCosa = "esto es cualquier cosa";

             var escuela = _context.Escuelas.FirstOrDefault();
           
            return View(escuela);
        }

        public EscuelaController(EscuelaContext context){
            _context = context;
        }
    }
}