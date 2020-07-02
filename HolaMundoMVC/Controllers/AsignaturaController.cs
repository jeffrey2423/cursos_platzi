using Microsoft.AspNetCore.Mvc;
using HolaMundoMVC.Models;
using System;
using CoreEscuela.Entidades;
using System.Collections.Generic;

namespace HolaMundoMVC.Controllers
{
    public class AsignaturaController : Controller
    {
        public IActionResult Index()
        {

            return View(new Asignatura
            {
                Nombre = "Programacion",
                Id = Guid.NewGuid().ToString()
            });
        }

        
        public IActionResult MultiAsignatura()
        {
            var listaAsignaturas = new List<Asignatura>() {
                new Asignatura {
                Nombre = "Matemáticas",
                Id = Guid.NewGuid ().ToString ()
                },
                new Asignatura {
                Nombre = "Educación Física",
                Id = Guid.NewGuid ().ToString ()
                },
                new Asignatura {
                Nombre = "Castellano",
                Id = Guid.NewGuid ().ToString ()
                },
                new Asignatura {
                Nombre = "Ciencias Naturales",
                Id = Guid.NewGuid ().ToString ()
                },
                new Asignatura {
                Nombre = "Programacion",
                Id = Guid.NewGuid ().ToString ()
                }
            };


            ViewBag.CualquierCosa = "esto es cualquier cosa";
            ViewBag.Fecha = DateTime.Now;


            return View("MultiAsignatura", listaAsignaturas);
        }
    }
}