using System;

namespace HolaMundoMVC.Models
{
    public class Asignatura:ObjetoEscuelaBase
    {
        public string CursoId {get; set;}
        public Curso Curso {get; set;}
    }
}