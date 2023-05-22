using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Repuestos_San_jorge.Models
{
    public class Schedule
    {
        [Key]
        public int id { get; set; }

        [Required]
        public TimeSpan apertura { get; set; }

        [Required]
        public TimeSpan cierre { get; set; }

        public int clientId { get; set; }
        
        [ForeignKey("clientId")]
        public Client? client { get; set; }
    }
}
