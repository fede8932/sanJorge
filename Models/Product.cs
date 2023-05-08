using System.ComponentModel.DataAnnotations;

namespace Repuestos_San_jorge.Models
{
    public class Product
    {
        [Key]
        public int id { get; set; }

        [Required]
        public string article { get; set; }

        [Required]
        public string description { get; set; }

        [Required]
        public float listPrice { get; set; }

        [Required]
        public float costPercentage { get; set; }

        [Required]
        public float salePercentage { get; set; }

        public ICollection<PurchaseOrderItem> purchaseOrderItems { get; set; }

        public ICollection<BrandProduct> brandProducts { get; set; }

        public Stock stock { get; set; }

        // public Product()
        // {
        //     article = "";
        //     description = "";
        //     purchaseOrderItems = new List<PurchaseOrderItem>();
        //     brandProducts = new List<BrandProduct>();
        //     stock = new Stock();
        // }
    }
}
