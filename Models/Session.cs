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
        public string ip { get; set; }

        [Required]
        public DateTime? fechaHora { get; set; }

        [Required]
        public string agenteUsuario { get; set; }
    }
}
