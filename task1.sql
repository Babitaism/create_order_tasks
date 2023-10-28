with temp_view as (
    select
        u.user_id,
        u.username,
        u.email,
        o.order_date,
        oi.product_id,
        oi.order_quantity,
        p.price,
        p.stock_quantity,
        (oi.order_quantity * p.price) total
    from
        users u
        join orders o on u.user_id = o.user_id
        join orderitems oi on oi.order_id = o.order_id
        join products p on p.product_id = oi.product_id
    where
        order_date > DATE_FORMAT(sysdate(), '%d-%m-%y') - 30
)
select
    username,
    email,
    sum(total) total_amount_spent
from
    temp_view
group by
    user_id
