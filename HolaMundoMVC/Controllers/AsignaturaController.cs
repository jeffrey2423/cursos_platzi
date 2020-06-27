using Microsoft.AspNetCore.Mvc;
using HolaMundoMVC.Models;
using System;
using CoreEscuela.Entidades;

namespace HolaMundoMVC.Controllers
{
    public class AsignaturaController : Controller
    {
        public IActionResult Index()
        {
            var asignatura = new Asignatura{
                UniqueId = Guid.NewGuid().ToString(),
                Nombre = "Programacion"
            };


            ViewBag.CualquierCosa = "esto es cualquier cosa";
            ViewBag.Fecha = DateTime.Now;
            return View(asignatura);
        }
    }
}