using System.ComponentModel.DataAnnotations;

namespace Repuestos_San_jorge.Models
{
    public class Brand
    {
        public int id { get; set; }

        [Required]
        public string name { get; set; }

        public ICollection<BrandSupplier> brandSuppliers { get; set; }

        public ICollection<BrandProduct> brandProducts { get; set; }

        public Stock stock { get; set; }

        public Brand()
        {
            name = "";
            brandSuppliers = new List<BrandSupplier>();
            brandProducts = new List<BrandProduct>();
            stock = new Stock();
        }
    }
}
