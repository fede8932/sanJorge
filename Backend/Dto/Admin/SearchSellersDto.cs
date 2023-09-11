using Repuestos_San_jorge.Models;

namespace Repuestos_San_jorge.Dto.Admin
{
    public class SearchSellersDto
    {
        public int totalRows { get; set; }
        public int totalPages { get; set; }
        public IEnumerable<Seller> sellers { get; set; }
    }
    
}