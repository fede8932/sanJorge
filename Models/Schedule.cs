using System.ComponentModel.DataAnnotations;

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
        public Client client { get; set; }

        public Schedule()
        {
            client = new Client();
        }
    }
}
