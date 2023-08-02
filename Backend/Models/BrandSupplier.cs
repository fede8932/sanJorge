using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Repuestos_San_jorge.Models
{
    public class BrandSupplier
    {
        [Key]
        public int id { get; set; }

        [Required]
        public int? supplierId { get; set; }

        [ForeignKey("supplierId")]
        public Supplier supplier { get; set; }

        public int? brandId { get; set; }

        [ForeignKey("brandId")]
        public Brand brand { get; set; }
    }
}
