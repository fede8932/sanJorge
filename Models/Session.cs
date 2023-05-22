using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Repuestos_San_jorge.Models
{
    public class Session
    {
        [Key]
        public int id { get; set; }

        [Required]
        public int userId { get; set; }

        [Required]
        public string token { get; set; }
        [Required]
        public string refresh { get; set; }
    }
}
