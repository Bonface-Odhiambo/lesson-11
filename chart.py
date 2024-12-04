import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

def create_modern_area_chart():
    # Set a modern, clean style
    plt.style.use('seaborn-v0_8-pastel')
    
    # Create figure with high-quality resolution
    plt.figure(figsize=(12, 7), dpi=100)
    
    # Generate sample data with more interesting patterns
    np.random.seed(42)
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    
    # Create cumulative data with some trend
    product_a = np.cumsum(np.random.randn(12) * 30 + 80)
    product_b = np.cumsum(np.random.randn(12) * 25 + 70)
    product_c = np.cumsum(np.random.randn(12) * 35 + 90)
    
    # Modern color palette with soft, appealing colors
    colors = ['#4BC0C0', '#FF6384', '#36A2EB']
    
    # Create stacked area chart with transparency
    plt.fill_between(months, product_a, label='Product A', alpha=0.6, color=colors[0])
    plt.fill_between(months, product_a, product_a + product_b, label='Product B', alpha=0.6, color=colors[1])
    plt.fill_between(months, product_a + product_b, product_a + product_b + product_c, label='Product C', alpha=0.6, color=colors[2])
    
    # Sophisticated title and labels
    plt.title('Product Performance Trends', 
              fontsize=18, 
              fontweight='bold', 
              color='#333333', 
              pad=20)
    plt.xlabel('Months', fontsize=12, color='#666666')
    plt.ylabel('Cumulative Performance', fontsize=12, color='#666666')
    
    # Modern legend placement
    plt.legend(loc='upper center', 
               bbox_to_anchor=(0.5, 1.15), 
               ncol=3, 
               frameon=False)
    
    # Subtle grid
    plt.grid(True, linestyle='--', linewidth=0.5, color='#E0E0E0')
    
    # Rotate x-axis labels for better readability
    plt.xticks(rotation=45)
    
    # Adjust layout to prevent cutting off labels
    plt.tight_layout()
    
    # Show the plot
    plt.show()

# Call the function to create and display the chart
create_modern_area_chart()