using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Repuestos_San_jorge.Models
{
    public class PointOfSale
    {
        [Key]
        public int id { get; set; }

        [Required]
        public string nombre { get; set; }

        [Required]
        public string calle { get; set; }

        [Required]
        public int altura { get; set; }

        [Required]
        public string localidad { get; set; }

        [Required]
        public int codigoPostal { get; set; }

        public Stock? stock { get; set; }

        public ICollection<Location>? locations { get; set; }
    }
}
