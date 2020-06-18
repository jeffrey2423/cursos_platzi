using Microsoft.AspNetCore.Mvc;
using HolaMundoMVC.Models;
using System;

namespace HolaMundoMVC.Controllers
{
    public class EscuelaController : Controller
    {
        public IActionResult Index()
        {
            var escuela = new Escuela();
            escuela.AñoFundacion = 2020;
            escuela.Nombre = "Prueba";
            escuela.EscuelaId = Guid.NewGuid().ToString();
            return View(escuela);
        }
}
}