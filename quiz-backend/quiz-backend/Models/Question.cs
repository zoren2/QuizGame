using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace quiz_backend.Models
{
    public class Question
    {
        // Model fields -> Think fillable in PHP
        public int ID { get; set; }
        public string Text { get; set; }
    }
}
