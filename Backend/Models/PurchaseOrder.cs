using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Repuestos_San_jorge.Dto.Enums;

namespace Repuestos_San_jorge.Models
{
    public class PurchaseOrder
    {
        [Key]
        public int id { get; set; }

        [Required]
        public DateTime date { get; set; }

        [Required]
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public PurchaseOrderStatusType status { get; set; }

        [Required]
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public PurchaseOrderType type { get; set; }

        [Required]
        public float total { get; set; }

        [Required]
        public bool efective { get; set; }

        public int? supplierId { get; set; }

        [ForeignKey("supplierId")]
        public Supplier? supplier { get; set; }

        public int? clientId { get; set; }

        [ForeignKey("clientId")]
        public Client? client { get; set; }

        public ICollection<PurchaseOrderItem>? purchaseOrderItems { get; set; }

        public Voucher? Voucher { get; set; }

        public ControlOrder? controlOrder { get; set; }

        public PurchaseOrder()
        {
            status = PurchaseOrderStatusType.Open;
        }
    }
}
