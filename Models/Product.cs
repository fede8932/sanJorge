using System.ComponentModel.DataAnnotations;

namespace Repuestos_San_jorge.Models
{
    public class Product
    {
        public int id { get; set; }

        [Required]
        public string article { get; set; }

        public string description { get; set; }

        public float listPrice { get; set; }

        public float costPercentage { get; set; }

        public float salePercentage { get; set; }

        public ICollection<PurchaseOrderItem> purchaseOrderItems { get; set; }

        public ICollection<BrandProduct> brandProducts { get; set; }

        public Stock stock { get; set; }

        public Product()
        {
            article = "";
            description = "";
            purchaseOrderItems = new List<PurchaseOrderItem>();
            brandProducts = new List<BrandProduct>();
            stock = new Stock();
        }
    }
}
