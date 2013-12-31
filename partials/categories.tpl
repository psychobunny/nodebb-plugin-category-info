<!-- BEGIN categories -->
<div class="col-md-3 col-xs-12 category-item">
	<meta itemprop="name" content="{categories.name}">
	<a href="category/{categories.slug}" itemprop="url">
		<h4><span class="badge {categories.badgeclass}">{categories.topic_count} </span> {categories.name}</h4>
	</a>
	<div class="category-icon" style="background: {categories.background}; color: {categories.color};">
		<div id="category-{categories.cid}" class="category-slider-{categories.post_count}">
			<a style="color: {categories.color};" href="category/{categories.slug}" itemprop="url">
				<div class="category-box"><i class="fa {categories.icon} fa-4x"></i></div>
				<div class="category-box description" itemprop="description">{categories.description}</div>
			</a>
			<!-- BEGIN posts -->
			<div class="category-box">
				<div class="post-preview">
					<a style="color: {categories.color};" href="./user/{categories.posts.userslug}"><img src="{categories.posts.picture}" class="pull-left" /></a>
					<p class=""><a style="color: {categories.color};" href="topic/{categories.posts.topicSlug}#{categories.posts.pid}">{categories.posts.content}</a></p>
				</div>
			</div>
			<!-- END posts -->
		</div>
	</div>
</div>
<!-- END categories -->