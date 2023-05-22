using System.ComponentModel.DataAnnotations;

namespace Repuestos_San_jorge.Models
{
    public class PurchaseOrder
    {
        [Key]
        public int id { get; set; }

        [Required]
        public DateTime date { get; set; }

        [Required]
        public string status { get; set; }

        public float total { get; set; }

        public int supplierId { get; set; }

        public ICollection<PurchaseOrderItem>? purchaseOrderItems { get; set; }

        // public PurchaseOrder()
        // {
        //     status = "";
        //     purchaseOrderItems = new List <PurchaseOrderItem>();
        // }
    }
}
