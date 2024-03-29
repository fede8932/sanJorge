using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Repuestos_San_jorge.Models
{
    public class Stock
    {
        [Key]
        public int id { get; set; }

        [Required]
        public int stock { get; set; }

        [Required]
        public int minStock { get; set; }

        public int? pointOfSaleId { get; set; }

        [ForeignKey("pointOfSaleId")]
        public PointOfSale? pointOfSale { get; set; }
        public BrandProduct? brandProduct { get; set; }
    }
}
