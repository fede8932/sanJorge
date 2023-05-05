using System.ComponentModel.DataAnnotations;

namespace Repuestos_San_jorge.Models
{
    public class BrandSupplier
    {
        public int id { get; set; }

        [Required]
        public int supplierId { get; set; }

        public Supplier supplier { get; set; }

        public int brandId { get; set; }

        public Brand brand { get; set; }

        public BrandSupplier()
        {
            supplier = new Supplier();
            brand = new Brand();
        }
    }
}
