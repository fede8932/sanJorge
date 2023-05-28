using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Repuestos_San_jorge.Models
{
    public class Location
    {
        [Key]
        public int id { get; set; }

        [Required]
        public string sector { get; set; }

        [Required]
        public string rack { get; set; }

        [Required]
        public string estante { get; set; }

        public int? pointOfSaleId { get; set; }

        [ForeignKey("pointOfSaleId")]
        public PointOfSale? pointOfSale { get; set; }
    }
}
